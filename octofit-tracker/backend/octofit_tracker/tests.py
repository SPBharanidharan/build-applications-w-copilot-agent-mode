from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class OctofitModelsTest(TestCase):
    def setUp(self):
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')
        spiderman = User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel)
        batman = User.objects.create(name='Batman', email='batman@dc.com', team=dc)
        Activity.objects.create(user=spiderman, type='Running', duration=30)
        Workout.objects.create(name='Morning Cardio', description='Cardio for all heroes')
        Leaderboard.objects.create(user=spiderman, points=100)

    def test_user_creation(self):
        self.assertEqual(User.objects.count(), 2)

    def test_team_creation(self):
        self.assertEqual(Team.objects.count(), 2)

    def test_activity_creation(self):
        self.assertEqual(Activity.objects.count(), 1)

    def test_workout_creation(self):
        self.assertEqual(Workout.objects.count(), 1)

    def test_leaderboard_creation(self):
        self.assertEqual(Leaderboard.objects.count(), 1)
