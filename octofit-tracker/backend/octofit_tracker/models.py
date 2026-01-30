from djongo import models

from django.contrib.auth.models import AbstractUser
from djongo import models as djongo_models

class User(AbstractUser):
    email = djongo_models.EmailField(unique=True)
    # Additional profile fields can be added here

class Team(djongo_models.Model):
    name = djongo_models.CharField(max_length=100, unique=True)
    members = djongo_models.ArrayReferenceField(to=User)

class Activity(djongo_models.Model):
    user = djongo_models.ForeignKey(User, on_delete=djongo_models.CASCADE)
    type = djongo_models.CharField(max_length=50)
    duration = djongo_models.IntegerField()  # in minutes
    calories = djongo_models.IntegerField()
    timestamp = djongo_models.DateTimeField(auto_now_add=True)

class Workout(djongo_models.Model):
    name = djongo_models.CharField(max_length=100)
    description = djongo_models.TextField()
    suggested_for = djongo_models.CharField(max_length=100)

class LeaderboardEntry(djongo_models.Model):
    user = djongo_models.ForeignKey(User, on_delete=djongo_models.CASCADE)
    score = djongo_models.IntegerField(default=0)


