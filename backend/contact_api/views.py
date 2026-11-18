
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from django.core.mail import send_mail
from django.conf import settings

from .models import ContactMessage
from .serializers import ContactMessageSerializer


class HealthView(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request):
        return Response({
            "status": "ok",
            "service": "portfolio-api"
        })


class ContactCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    authentication_classes = []
    permission_classes = []

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        contact = serializer.save()

        send_mail(
            subject=f"New Portfolio Inquiry from {contact.name}",
            message=(
                f"Name: {contact.name}\n"
                f"Email: {contact.email}\n"
                f"Message: {contact.message}"
            ),
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.CONTACT_RECEIVER_EMAIL],
            fail_silently=False,
        )

        return Response(
            {"message": "Message sent successfully!"},
            status=status.HTTP_201_CREATED,
        )
