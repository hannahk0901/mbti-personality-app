from django.urls import path
from .views import calculate_mbti

urlpatterns = [
    path("calculate/", calculate_mbti, name="calculate_mbti"),
]
