import base64
from django.core.files.base import ContentFile


def base64_to_file(base64_string, username):
    # Remove the prefix (if any)
    if base64_string.startswith('data:'):
        header, base64_string = base64_string.split(',', 1)

    # Decode the Base64 string
    file_data = base64.b64decode(base64_string)

    # You can create a file object using ContentFile
    file = ContentFile(file_data)

    # Optionally: you can give the file a name (this can be dynamically created or assigned)
    file.name = f'{username}-img.jpeg'  # Adjust extension accordingly, e.g. 'image.png'

    return file


