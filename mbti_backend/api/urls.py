from django.urls import path
from .views import calculate_mbti
from .auth_views import register_user, login_user

urlpatterns = [
    path('calculate_mbti/', calculate_mbti, name='calculate_mbti'),
    path('register/', register_user, name='register_user'),
    path('login/', login_user, name='login_user'),
]
