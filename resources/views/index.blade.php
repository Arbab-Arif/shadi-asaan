<x-app>
    <x-slot name="title">
        Home
    </x-slot>
    <section
        id="slider"
        class="owl-carousel"
    >
        <img
            src="{{asset('assets/img/Slider.png')}}"
            alt="banner"
        >

        {{--            @foreach($sliders as $slider)--}}
        {{--                <img src="{{ $slider->getImagePath('image') }}" alt="banner">--}}
        {{--            @endforeach--}}
    </section>
    <main class="max-w-7xl mx-auto">
        <p class="md:text-justify px-4 lg:px-0 text-xs md:text-lg lg:text-xl content max-w-5xl mx-auto font-secondary my-8 italic" id="about">
            We are one window, easy access and time saving solutions for our valuable customers.
            Proudly Presenting Shadi Asaan is an online platform, here our respective customers easily finds
            best and top city rated Marriage Halls, banquets, private places, farmhouses, caterings, decoration,
            rent a car and much more categories related to event management services in just few clicks. </p>
        <section
            class="lg:grid lg:grid-cols-2 gap-4"
        >
            <div class="bg-secondary px-6 py-6">
                <h3 class="text-white text-2xl md:text-3xl text-center pb-4">Why Shadi Asaan?</h3>
                <x-highlight-points title="Wide Range Event Categories" icon="map">
                    We provide wide of categories in our Shadi Asaan App
                    for our valuable customers
                </x-highlight-points>
                <x-highlight-points title="Time Saving and Location Filter" icon="map-pin">
                    Select your location on our location filter option to save your time
                    and exclude your visits
                </x-highlight-points>
                <x-highlight-points title="Direct connect to your categorize vendor" icon="phone-call">
                    Connect your vendors with our chat feature and feel free to ask
                    Any query regarding your events to your selective vendor
                </x-highlight-points>
                <x-highlight-points title="Realistic Pictures & Videos" icon="film">
                    Watch Vendor Media Section and experience the images and videos
                    to easily get your need.
                </x-highlight-points>
            </div>
            <img
                src="{{ asset('assets/img/side-banner.png') }}"
                alt="map"
                class="w-full mt-8 lg:mt-0"
            >
        </section>
        <section
            id="vendor"
            class="my-8"
        >
            <img
                src="{{ asset('assets/img/end-banner.png') }}"
                alt="karachi"
                class="w-full"
            >
        </section>
    </main>
    <x-slot name="scripts">
        <script>
            $('.owl-carousel').owlCarousel({
                loop: true,
                autoplay: true,
                margin: 10,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });
        </script>
    </x-slot>
</x-app>
