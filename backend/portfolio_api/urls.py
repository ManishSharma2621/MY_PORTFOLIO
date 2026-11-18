from django.contrib import admin
from django.urls import path
from contact_api.views import ContactCreateView, HealthView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/health/", HealthView.as_view(), name="health"),
    path("api/contact/", ContactCreateView.as_view(), name="contact"),
]
