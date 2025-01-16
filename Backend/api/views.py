from django.shortcuts import render
from django.http import JsonResponse
from .models import CustomUser
from django.views.decorators.csrf import csrf_exempt
import json 
from django.http import JsonResponse

from .utils import base64_to_file

# Create your views here.
""" import json
from django.http import JsonResponse

def handle_json_request(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            # Process the data
            return JsonResponse({'message': f'Received name: {name}, email: {email}'})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)
 """
""" email
: 
"abdulmalikasimiyu@gmail.com"
image
: 
"data:image/jpeg;base64,/9j/4QC8RXhpZgAASUkqAAgAAA
name
: 
"Maleek"
password
: 
"Maleek@3663"
role
: 
"user"
username
: 
"Ayama" """

@csrf_exempt
def sign_up_form(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            username = data.get('username')
            password = data.get('password')
            role = data.get('role')
            image = data.get('image')
            
            new_user = CustomUser(name=name, username=username, email=email, password=password, role=role.upper(), image=base64_to_file(image, username))
            new_user.save()
            print(new_user.__dict__)
            # Process the data
            return JsonResponse({'message': f'Received name: {name}, email: {email}'})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)
    """  print(request.POST.get('name'))
        name = request.POST['name']
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        role = request.POST['role'] """

"""  new_user = CustomUser(name = name, username = username, email = email, password = password, role = role)
        new_user.save() """

"""         return JsonResponse({'name':new_user.name, 'username':new_user.username, 'email':new_user.email, 'password':new_user.password, 'role': new_user.role})
    return JsonResponse({'message':'Method not allowed'}) """

def profile(request, pk):
    user = CustomUser.objects.filter(pk=pk).first()
    if user is not None:

        return JsonResponse({'name':user.name, 'username':user.username, 'email':user.email, 'password':user.password, 'role': user.role})
    else:
        return JsonResponse({'message': 'User not found'})




