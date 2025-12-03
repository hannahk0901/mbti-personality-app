from rest_framework.decorators import api_view
from rest_framework.response import Response

groupFunctions = {
    1: ['Fi', 'Te', 'Ne', 'Si'],
    2: ['Fe', 'Ti', 'Ni', 'Se'],
    3: ['Fi', 'Ni', 'Te', 'Se'],
    4: ['Ti', 'Ne', 'Si', 'Fe']
}

groupToTypes = {
    1: {'Fi,Ne,Si,Te': 'INFP', 'Ne,Fi,Te,Si': 'ENFP', 'Si,Te,Fi,Ne': 'ISTJ', 'Te,Si,Ne,Fi': 'ESTJ'},
    2: {'Fe,Ni,Ti,Se': 'INFJ', 'Fe,Ni,Se,Ti': 'ENFJ', 'Ti,Se,Ni,Fe': 'ISTP', 'Se,Ti,Fe,Ni': 'ESTP'},
    3: {'Fi,Ni,Te,Se': 'ISFP', 'Ni,Te,Fi,Se': 'INTJ', 'Te,Ni,Se,Fi': 'ENTJ', 'Se,Fi,Te,Ni': 'ESFP'},
    4: {'Ti,Ne,Si,Fe': 'INTP', 'Ne,Ti,Fe,Si': 'ENTP', 'Si,Fe,Ti,Ne': 'ISFJ', 'Fe,Si,Ne,Ti': 'ESFJ'}
}

dominantToType = {
    'Fi': 'INFP', 'Fe': 'ENFJ', 'Ti': 'INTP', 'Te': 'ENTJ',
    'Ni': 'INFJ', 'Ne': 'ENFP', 'Si': 'ISFJ', 'Se': 'ESFP'
}

def determineGroup(top2):
    groupMatches = {
        1: ['Fi', 'Te', 'Ne', 'Si'],
        2: ['Fe', 'Ti', 'Ni', 'Se'],
        3: ['Fi', 'Te', 'Ni', 'Se'],
        4: ['Ti', 'Ne', 'Si', 'Fe']
    }
    for group, funcs in groupMatches.items():
        if top2[0] in funcs and top2[1] in funcs:
            return group
    return None

@api_view(["POST"])
def calculate_mbti(request):
    part1 = request.data.get("part1Scores", {})
    part2 = request.data.get("part2Scores", {})

    # Combine scores
    combined = {f: part1.get(f, 0) + part2.get(f, 0)
                for f in ['Fi', 'Fe', 'Ti', 'Te', 'Ni', 'Ne', 'Si', 'Se']}
    sorted_funcs = sorted(combined.items(), key=lambda x: x[1], reverse=True)
    top2 = [sorted_funcs[0][0], sorted_funcs[1][0]]

    # Determine group
    group = determineGroup(top2)
    if not group:
        return Response({"error": "Could not determine group"}, status=400)

    relevant = groupFunctions[group]
    sorted_group = sorted(relevant, key=lambda f: combined[f], reverse=True)
    key = ",".join(sorted_group)
    mbti = groupToTypes[group].get(key)

    fallback = None
    if not mbti:
        dom, aux = sorted_group[:2]
        for stack, t in groupToTypes[group].items():
            sDom, sAux = stack.split(",")[:2]
            if sDom == dom and sAux == aux:
                mbti = t
                fallback = f"No exact match, but top two functions ({dom} & {aux}) suggest:"
                break
        if not mbti:
            mbti = dominantToType.get(dom, "Unknown Type")
            fallback = f"No close match found. Based on dominant function ({dom}), your best fit might be:"

    return Response({
        "mbti": mbti,
        "group": group,
        "fallback": fallback,
        "combinedScores": combined,
        "top2": top2,
        "sortedGroup": sorted_group
    })
