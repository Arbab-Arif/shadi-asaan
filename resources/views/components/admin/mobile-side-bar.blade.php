<div class="mobile-menu md:hidden">
    <div class="mobile-menu-bar">
        <a href="" class="flex mr-auto">
        </a>
        <a href="javascript:;" id="mobile-menu-toggler"> <i data-feather="bar-chart-2"
                                                            class="w-8 h-8 text-white transform -rotate-90"></i> </a>
    </div>
    <ul class="border-t border-theme-24 py-5 hidden">
        <li>
            <a href="{{route('admin.dashboard')}}"
               class="menu {{request()->routeIs('admin.dashboard') ? 'menu--active': null}}">
                <div class="menu__icon"><i data-feather="home"></i></div>
                <div class="menu__title"> Dashboard</div>
            </a>
        </li>
        @if(auth('admin')->user()->can('vendor'))

            <li>
                <a href="{{route('admin.vendor.index')}}"
                   class="menu {{request()->routeIs('admin.vendor.*') ? 'menu--active' : null}}">
                    <div class="menu__icon"><i data-feather="home"></i></div>
                    <div class="menu__title">Vendor</div>
                </a>
            </li>
        @endif
        @if(auth('admin')->user()->can('business_type'))
            <li>
                <a href="{{route('admin.business_type.index')}}"
                   class="menu {{request()->routeIs('admin.business_type.*') ? 'menu--active' : null}}">
                    <div class="menu__icon"><i data-feather="home"></i></div>
                    <div class="menu__title">Business Type</div>
                </a>
            </li>
        @endif
        @if(auth('admin')->user()->can('venue'))
            <li>
                <a href="{{route('admin.venue.index')}}"
                   class="menu {{request()->routeIs('admin.venue.*') ? 'menu--active' : null}}">
                    <div class="menu__icon"><i data-feather="home"></i></div>
                    <div class="menu__title">Venue</div>
                </a>
            </li>
        @endif
        @if(auth('admin')->user()->can('customer'))
            <li>
                <a href="{{route('admin.customer.index')}}"
                   class="menu {{request()->routeIs('admin.customer.index') ? 'menu--active' : null}}">
                    <div class="menu__icon"><i data-feather="home"></i></div>
                    <div class="menu__title">Customer</div>
                </a>
            </li>
        @endif
        @if(auth('admin')->user()->can('customer_feed_back'))
            <li>
                <a href="{{route('admin.customer-feedback.index')}}"
                   class="menu {{request()->routeIs('admin.customer-feedback.index') ? 'menu--active' : null}}">
                    <div class="menu__icon"><i data-feather="home"></i></div>
                    <div class="menu__title">Customer FeedBack</div>
                </a>
            </li>
        @endif
        @if(auth('admin')->user()->can('inquire'))
            <li>
                <a href="{{route('admin.inquire.index')}}"
                   class="menu {{request()->routeIs('admin.inquire.index') ? 'menu--active' : null}}">
                    <div class="menu__icon"><i data-feather="home"></i></div>
                    <div class="menu__title">Inquire</div>
                </a>
            </li>
        @endif
        @if(auth('admin')->user()->can('role_management'))
            <li>
                <a href="{{route('admin.role.index')}}"
                   class="menu {{request()->routeIs('admin.role.*') ? 'menu--active' : null}}">
                    <div class="menu__icon"><i data-feather="home"></i></div>
                    <div class="menu__title">Role</div>
                </a>
            </li>
        @endif
        @if(auth('admin')->user()->can('admin_management'))
            <li>
                <a href="{{route('admin.sub_admin.index')}}"
                   class="menu {{request()->routeIs('admin.sub_admin.*') ? 'menu--active' : null}}">
                    <div class="menu__icon"><i data-feather="home"></i></div>
                    <div class="menu__title">Sub Admin</div>
                </a>
            </li>
        @endif
        @if(auth('admin')->user()->can('slider'))
            <li>
                <a href="{{route('admin.slider.index')}}"
                   class="menu {{request()->routeIs('admin.slider.*') ? 'menu--active' : null}}">
                    <div class="menu__icon"><i data-feather="home"></i></div>
                    <div class="menu__title">slider</div>
                </a>
            </li>
        @endif
    </ul>
</div>
