# backend/users/serializers.py

from rest_framework import serializers
from .models import UserPassword

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPassword
        fields = ['email', 'password']

    def create(self, validated_data):
        user = UserPassword(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

