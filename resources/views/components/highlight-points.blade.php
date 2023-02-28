<div class='grid grid-cols-12 pb-8'>
    <i data-feather="{{ $icon }}" class="text-white w-6 mt-1 col-span-2 md:col-span-1"></i>
    <div class="text-xl md:text-2xl font-secondary text-white col-span-10 md:col-span-11">
        <p>{{ $title }}</p>
        <p class="text-sm md:text-base text-white">
            {{ $slot }}
        </p>
    </div>
</div>
