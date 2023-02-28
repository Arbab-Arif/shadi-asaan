<nav class="side-nav">
    <a href="{{route('admin.dashboard')}}" class="intro-x flex items-center pl-5 pt-4">
        <img class="w-6" src="{{ asset('assets/dist/logo/Logo.png') }}" style="width: 100%">
        <span class="hidden xl:block text-white text-lg ml-3">
        </span>
    </a>
    <div class="side-nav__devider my-6"></div>
    <ul>
        <li>
            <a href="{{route('admin.dashboard')}}"
               class="side-menu {{ request()->routeIs('admin.dashboard') ? 'side-menu--active' : null }}">
                <div class="side-menu__icon"><i data-feather="home"></i></div>
                <div class="side-menu__title"> Dashboard</div>
            </a>
        </li>
        @if(auth('admin')->user()->can('vendor'))
            <li>
                <a href="{{ route('admin.vendor.index') }}"
                   class="side-menu {{ request()->routeIs('admin.vendor.*') ? 'side-menu--active' : null }}">
                    <div class="side-menu__icon"><i data-feather="file-text"></i></div>
                    <div class="side-menu__title"> Vendor</div>
                </a>
            </li>
        @endif
        @if(auth('admin')->user()->can('business_type'))
            <li>
                <a href="{{ route('admin.business_type.index') }}"
                   class="side-menu {{ request()->routeIs('admin.business_type.*') ? 'side-menu--active' : null }}">
                    <div class="side-menu__icon"><i data-feather="file-text"></i></div>
                    <div class="side-menu__title">Business Type</div>
                </a>
            </li>
        @endif
        {{--        <li>--}}
        {{--            <a href="{{ route('admin.area.index') }}"--}}
        {{--               class="side-menu {{ request()->routeIs('admin.area.*') ? 'side-menu--active' : null }}">--}}
        {{--                <div class="side-menu__icon"><i data-feather="file-text"></i></div>--}}
        {{--                <div class="side-menu__title">Area</div>--}}
        {{--            </a>--}}
        {{--        </li>--}}
        @if(auth('admin')->user()->can('venue'))
            <li>
                <a href="{{ route('admin.venue.index') }}"
                   class="side-menu {{ request()->routeIs('admin.venue.*') ? 'side-menu--active' : null }}">
                    <div class="side-menu__icon"><i data-feather="file-text"></i></div>
                    <div class="side-menu__title">Venue</div>
                </a>
            </li>
        @endif
        @if(auth('admin')->user()->can('customer'))
            <li>
                <a href="{{ route('admin.customer.index') }}"
                   class="side-menu {{ request()->routeIs('admin.customer.index') ? 'side-menu--active' : null }}">
                    <div class="side-menu__icon"><i data-feather="file-text"></i></div>
                    <div class="side-menu__title">Customer</div>
                </a>
            </li>
        @endif
        @if(auth('admin')->user()->can('customer_feed_back'))
            <li>
                <a href="{{ route('admin.customer-feedback.index') }}"
                   class="side-menu {{ request()->routeIs('admin.customer-feedback.index') ? 'side-menu--active' : null }}">
                    <div class="side-menu__icon"><i data-feather="file-text"></i></div>
                    <div class="side-menu__title">Customer FeedBack</div>
                </a>
            </li>
        @endif
        @if(auth('admin')->user()->can('inquire'))
            <li>
                <a href="{{ route('admin.inquire.index') }}"
                   class="side-menu {{ request()->routeIs('admin.inquire.index') ? 'side-menu--active' : null }}">
                    <div class="side-menu__icon"><i data-feather="file-text"></i></div>
                    <div class="side-menu__title">Inquire</div>
                </a>
            </li>
        @endif
        @if(auth('admin')->user()->can('role_management'))
            <li>
                <a href="{{ route('admin.role.index') }}"
                   class="side-menu {{ request()->routeIs('admin.role.*') ? 'side-menu--active' : null }}">
                    <div class="side-menu__icon"><i data-feather="file-text"></i></div>
                    <div class="side-menu__title">Role</div>
                </a>
            </li>
        @endif
        @if(auth('admin')->user()->can('admin_management'))
            <li>
                <a href="{{ route('admin.sub_admin.index') }}"
                   class="side-menu {{ request()->routeIs('admin.sub_admin.*') ? 'side-menu--active' : null }}">
                    <div class="side-menu__icon"><i data-feather="file-text"></i></div>
                    <div class="side-menu__title">Sub Admin</div>
                </a>
            </li>
        @endif
        @if(auth('admin')->user()->can('subscription'))
            <li>
                <a href="{{ route('admin.subscription.index') }}"
                   class="side-menu {{ request()->routeIs('admin.subscription.*') ? 'side-menu--active' : null }}">
                    <div class="side-menu__icon"><i data-feather="file-text"></i></div>
                    <div class="side-menu__title">Subscription</div>
                </a>
            </li>
        @endif
        @if(auth('admin')->user()->can('slider'))
            <li>
                <a href="{{ route('admin.slider.index') }}"
                   class="side-menu {{ request()->routeIs('admin.slider.*') ? 'side-menu--active' : null }}">
                    <div class="side-menu__icon"><i data-feather="file-text"></i></div>
                    <div class="side-menu__title">Slider</div>
                </a>
            </li>
        @endif

    </ul>
</nav>
