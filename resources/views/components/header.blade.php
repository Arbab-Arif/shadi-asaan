<header class="text-gray-900 max-w-7xl mx-auto" x-data="{open: false}">
    <nav class="text-black pt-6 pb-3 px-2 flex items-center gap-8 justify-center">
        <ul class="hidden lg:flex items-center space-x-8">
            <li><a href="/" class="text-secondary">Home</a></li>
            <li><a href="#about" class="text-secondary">About Us</a></li>
        </ul>
        <div class="w-32">
            <a href="/" class="inline-flex items-center absolute z-10 top-1">
                <img src="{{ asset('assets/img/logo.png') }}" alt="logo" class="w-24 lg:w-32">
            </a>
        </div>
        <ul class="hidden lg:flex items-center space-x-8">
            <li><a href="#vendor" class="text-secondary">Become a Vendor</a></li>
            <li><a href="#contact" class="text-secondary">Contact Us</a></li>
        </ul>
        <div class="lg:hidden flex-1 text-right">
            <button @click="open = true" type="button"
                    class="flex lg:hidden bg-white rounded-md p-2 inline-flex items-center justify-center text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400"
                    id="main-menu" aria-haspopup="true" x-bind:aria-expanded="open">
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" x-description="Heroicon name: menu" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

        </div>
    </nav>
    <x-nav/>
</header>
