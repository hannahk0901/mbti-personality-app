const questionsPart2 = {
  group1: [
    // Fi vs Te
    { text: "I make decisions based on personal values rather than objective efficiency.", funcA: "Fi", funcB: "Te" },
    { text: "I care more about what feels right than what works best.", funcA: "Fi", funcB: "Te" },
    { text: "I prefer to be true to myself than to meet external expectations.", funcA: "Fi", funcB: "Te" },

    // Ne vs Si
    { text: "I enjoy exploring new ideas more than relying on past experiences.", funcA: "Ne", funcB: "Si" },
    { text: "I like imagining possibilities more than sticking to traditions.", funcA: "Ne", funcB: "Si" },
    { text: "I focus more on what's next than on what’s worked before.", funcA: "Ne", funcB: "Si" },

    // Fi vs Si
    { text: "I value personal authenticity more than familiarity.", funcA: "Fi", funcB: "Si" },
    { text: "I listen to my inner feelings more than my past experiences.", funcA: "Fi", funcB: "Si" },
    { text: "I trust what feels right now more than what has worked before.", funcA: "Fi", funcB: "Si" },

    // Te vs Ne
    { text: "I focus more on achieving results than generating ideas.", funcA: "Te", funcB: "Ne" },
    { text: "I trust measurable outcomes more than creative options.", funcA: "Te", funcB: "Ne" },
    { text: "I prefer doing what works over what’s possible.", funcA: "Te", funcB: "Ne" }
  ],

  group2: [
    // Fe vs Ti
    { text: "I care more about maintaining harmony than logical accuracy.", funcA: "Fe", funcB: "Ti" },
    { text: "I often consider others' emotions over internal reasoning.", funcA: "Fe", funcB: "Ti" },
    { text: "I prioritize people’s feelings over logical structure.", funcA: "Fe", funcB: "Ti" },

    // Ni vs Se
    { text: "I focus on deeper meanings more than immediate experiences.", funcA: "Ni", funcB: "Se" },
    { text: "I prefer long-term insights over real-time awareness.", funcA: "Ni", funcB: "Se" },
    { text: "I value symbolic foresight more than tangible action.", funcA: "Ni", funcB: "Se" },

    // Fe vs Se
    { text: "I respond more to social dynamics than my surroundings.", funcA: "Fe", funcB: "Se" },
    { text: "I am more aware of people’s emotions than physical details.", funcA: "Fe", funcB: "Se" },
    { text: "I focus more on group harmony than sensory stimulation.", funcA: "Fe", funcB: "Se" },

    // Ti vs Ni
    { text: "I value logical analysis more than inner symbolic insights.", funcA: "Ti", funcB: "Ni" },
    { text: "I prefer dissecting ideas to interpreting meanings.", funcA: "Ti", funcB: "Ni" },
    { text: "I trust internal reasoning more than intuitive foresight.", funcA: "Ti", funcB: "Ni" }
  ],

  group3: [
    // Fi vs Ni
    { text: "I prioritize how things align with my values over internal foresight.", funcA: "Fi", funcB: "Ni" },
    { text: "I trust my own morals more than symbolic insights.", funcA: "Fi", funcB: "Ni" },
    { text: "I process what feels right instead of what will happen.", funcA: "Fi", funcB: "Ni" },

    // Fi vs Te
    { text: "I make decisions based on personal ethics rather than external efficiency.", funcA: "Fi", funcB: "Te" },
    { text: "I trust what feels authentic more than what seems productive.", funcA: "Fi", funcB: "Te" },
    { text: "I feel better when I'm being genuine than when I'm achieving results.", funcA: "Fi", funcB: "Te" },

    // Te vs Se
    { text: "I prefer getting measurable results over reacting to sensory info.", funcA: "Te", funcB: "Se" },
    { text: "I trust plans and metrics more than what’s happening around me.", funcA: "Te", funcB: "Se" },
    { text: "I care more about results than quick action in the moment.", funcA: "Te", funcB: "Se" },

    // Ni vs Se
    { text: "I focus more on deeper meanings than what's immediately around me.", funcA: "Ni", funcB: "Se" },
    { text: "I look for future patterns rather than acting in the moment.", funcA: "Ni", funcB: "Se" },
    { text: "I prioritize insight over tangible experience.", funcA: "Ni", funcB: "Se" }
  ],

  group4: [
    // Ti vs Ne
    { text: "I prefer to build logical internal frameworks over exploring possibilities.", funcA: "Ti", funcB: "Ne" },
    { text: "I value precision over brainstorming ideas.", funcA: "Ti", funcB: "Ne" },
    { text: "I like breaking things down more than thinking of what's next.", funcA: "Ti", funcB: "Ne" },

    // Ti vs Fe
    { text: "I trust internal logic more than social harmony.", funcA: "Ti", funcB: "Fe" },
    { text: "I value analysis over people-pleasing.", funcA: "Ti", funcB: "Fe" },
    { text: "I’d rather be logically correct than socially liked.", funcA: "Ti", funcB: "Fe" },

    // Fe vs Si
    { text: "I care more about others' emotional needs than my past routines.", funcA: "Fe", funcB: "Si" },
    { text: "I notice group feelings more than I reflect on how I used to do things.", funcA: "Fe", funcB: "Si" },
    { text: "I choose kindness over familiarity.", funcA: "Fe", funcB: "Si" },

    // Ne vs Si
    { text: "I prefer thinking about possibilities rather than past experiences.", funcA: "Ne", funcB: "Si" },
    { text: "I look for what could happen, not what happened before.", funcA: "Ne", funcB: "Si" },
    { text: "I care more about innovation than tradition.", funcA: "Ne", funcB: "Si" }
  ]
};

export default questionsPart2;
