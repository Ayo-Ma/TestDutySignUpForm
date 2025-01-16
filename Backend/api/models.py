from django.db import models

# Role choices
ROLE_LIST = [
    ('ADMIN', 'Admin'),
    ('USER', 'User'),
    ('GUEST', 'Guest'),
]

class CustomUser(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    username = models.CharField(max_length=100, unique=True)
    role = models.CharField(choices=ROLE_LIST, max_length=100)
    password = models.CharField(max_length=128)  # Increased for hashed passwords
    image = models.ImageField(upload_to='profile_images/', blank=True, null=True)

    def __str__(self):
        return self.name
