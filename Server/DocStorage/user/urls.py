from django.urls import path
from .views import *

urlpatterns = [
        path('register/', UserCreateView.as_view(), name='user-registration'),
        path('login/', TokenObtainView.as_view(), name='login'),
        path('registration/', registration, name='trial-registration'),
        path('csrf_token/', get_csrf_token, name='get_csrf_token'),
        ]
