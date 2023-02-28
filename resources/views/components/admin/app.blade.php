<!DOCTYPE html>
<html lang="en" class="light">
<head>
    <meta charset="utf-8">
    <link href="{{ asset('assets/dist/images/logo.svg') }}" rel="shortcut icon">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Effects Tech">
    <title>{{ $title  }}</title>
    <!-- BEGIN: CSS Assets-->
    <link rel="stylesheet" href="{{ asset('assets/dist/css/app.css') }}" type="text/css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css"/>
    {{ $styles ?? '' }}
    <style>
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        /* Firefox */
        input[type=number] {
            -moz-appearance: textfield;
        }

        .ajs-success {
            color: #FFFFFF !important;
        }

        .ajs-error {
            color: #FFFFFF !important;
        }
    </style>
    <!-- END: CSS Assets-->
</head>

<body class="app">
<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
    {{ csrf_field() }}
</form>
{{--<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
    {{ csrf_field() }}
</form>--}}

<!-- BEGIN: Mobile Menu -->
<x-admin.mobile-side-bar></x-admin.mobile-side-bar>
<!-- END: Mobile Menu -->

<div class="flex">

    <!-- BEGIN: Side Menu -->
    <x-admin.side-bar></x-admin.side-bar>
    <!-- END: Side Menu -->

    <!-- BEGIN: Content -->
    <div class="content">
        <!-- BEGIN: Top Bar -->
        <div class="top-bar">
            {{ $breadcrumb  }}
            <div class="intro-x dropdown w-8 h-8">
                <div class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
                     role="button" aria-expanded="false" data-tw-toggle="dropdown">
                    <img alt="Tinker Tailwind HTML Admin Template" src="{{asset('assets/dist/images/profile-7.jpg')}}">
                </div>
                <div class="dropdown-menu w-56">
                    <ul class="dropdown-content bg-primary text-white">
                        <li class="p-2">
                            <div class="font-medium">{{auth()->user()->name}}</div>
                            {{--                            <div class="text-xs text-white/70 mt-0.5 dark:text-slate-500">Backend Engineer</div>--}}
                        </li>
                        <li>
                            <a href="javascript:;" class="dropdown-item hover:bg-white/5" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();"> <i
                                    data-feather="toggle-right"
                                    class="w-4 h-4 mr-2"></i> Logout </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {{ $slot }}

    </div>

</div>
<!-- BEGIN: Dark Mode Switcher-->
{{--<div data-url="side-menu-dark-dashboard.html"
     class="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box dark:bg-dark-2 border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10">
    <div class="mr-4 text-gray-700 dark:text-gray-300">Dark Mode</div>
    <div class="dark-mode-switcher__toggle border"></div>
</div>--}}
<!-- END: Dark Mode Switcher-->
<!-- BEGIN: JS Assets-->
<script src="{{asset('assets/dist/js/app.js')}}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>
<script>
feather.replace();
</script>
@if(session('success'))
    <script type="text/javascript">
        $(function () {
            alertify.set('notifier', 'position', 'top-center');
            alertify.success("{{session('success')}}");
        })
    </script>
@endif
@if(session('status'))
    <script type="text/javascript">
        $(function () {
            alertify.set('notifier', 'position', 'top-center');
            alertify.success("{{session('status')}}");
        })
    </script>
@endif
@if ($errors->any())
    @foreach ($errors->all() as $error)
        <script type="text/javascript">
            $(function () {
                alertify.error('{{$error}}');
            })
        </script>
    @endforeach
@endif

{{ $scripts ?? '' }}

<!-- END: JS Assets-->
</body>
</html>
