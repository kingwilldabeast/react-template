from django.db import models

# Create your models here.
class Team(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    division = models.CharField(max_length=100)
    wins = models.IntegerField(default=0)
    losses = models.IntegerField(default=0)
    logo_url = models.URLField(blank=True)

    def __str__(self):
        return self.name
    
class Player(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='players')
    name = models.CharField(max_length=100, default='no name')
    position = models.CharField(max_length=100, default='no position')
    age = models.IntegerField(default=0)
    injured = models.BooleanField(default=False)
    photo_url = models.URLField(blank=True)

    def __str__(self):
        return self.name