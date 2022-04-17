
from django.shortcuts import render, redirect
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import ListView, DetailView
from .models import Bear, Color
from .forms import QualityForm


def home(request):
  return render(request, 'home.html')


def about(request):
  return render(request, 'about.html')

def bears_index(request):
    bears = Bear.objects.all()
    return render(request, 'bears/index.html', { 'bears': bears })

def bears_detail(request, bear_id):
    bear = Bear.objects.get(id=bear_id)

    quality_form = QualityForm()
    return render(request, 'bears/detail.html', {
    'bear': bear, 
    'quality_form': quality_form
  })

class BearCreate(CreateView):
  model = Bear
  fields = '__all__'
  success_url = '/bears'

class BearUpdate(UpdateView):
    model = Bear
    fields = ['name', 'description', 'price', 'size']
    success_url = '/bears/'

class BearDelete(DeleteView):
    model = Bear
    success_url = '/bears/'


def add_quality(request, bear_id):
    form = QualityForm(request.POST)
    if form.is_valid():
        new_quality = form.save(commit=False)
        new_quality.bear_id = bear_id
        new_quality.save()
    return redirect('detail', bear_id=bear_id)

class ColorList(ListView):
  model = Color

class ColorDetail(DetailView):
  model = Color

class ColorCreate(CreateView):
  model = Color
  fields = '__all__'

class ColorUpdate(UpdateView):
  model = Color
  fields = ['name','color']

class ColorDelete(DeleteView):
  model = Color
  success_url = '/colors/'

def assoc_color(request, bear_id, color_id):
  Bear.objects.get(id=bear_id).colors.add(color_id)
  return redirect('detail', bear_id=bear_id)

def unassoc_color(request, bear_id, color_id):
  Bear.objects.get(id=bear_id).colors.remove(color_id)
  return redirect('detail', bear_id=bear_id)