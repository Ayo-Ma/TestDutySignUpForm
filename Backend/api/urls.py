from django.urls import path
from .import views

# Create your models here.

urlpatterns = [
    path("signup", views.sign_up_form, name = "signupform"),
    path("profile/<int:pk>", views.profile, name = "profile"),
]
