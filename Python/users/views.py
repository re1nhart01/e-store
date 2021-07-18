from rest_framework.response import Response

from shop.serializers import RegisterUserSerializer

from rest_framework import decorators, status


@decorators.api_view(['POST'])
def user_registration_view(request):
    if request.method == 'POST':
        if not request.user.is_authenticated:
            serializer = RegisterUserSerializer(data=request.data)
            if serializer.is_valid():
                user = serializer.save()
                if user:
                    return Response(status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
