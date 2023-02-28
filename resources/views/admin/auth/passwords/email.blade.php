<!DOCTYPE html>
<html lang="en" class="light">
<!-- BEGIN: Head -->
<head>
    <meta charset="utf-8">
    <link href="http://tinker.left4code.com/dist/images/logo.svg" rel="shortcut icon">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
          content="Tinker admin is super flexible, powerful, clean & modern responsive tailwind admin template with unlimited possibilities.">
    <meta name="keywords"
          content="admin template, Tinker Admin Template, dashboard template, flat admin template, responsive admin template, web app">
    <meta name="author" content="LEFT4CODE">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css"/>
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
    <title>Forgot Password - Admin Shadi Asaan</title>

    <!-- BEGIN: CSS Assets-->
    <link rel="stylesheet" href="{{asset('assets/dist/css/app.css')}}"/>
    <!-- END: CSS Assets-->
</head>
<!-- END: Head -->

<body class="login">
<div class="container sm:px-10">
    <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Register Info -->
        <div class="hidden xl:flex flex-col min-h-screen">
            <div class="my-auto">
                <img alt="Shadi Asaan" class="-intro-x w-1/2 -mt-16"
                     src="{{asset('assets/dist/logo/Web-logo.png')}}">
            </div>
        </div>
        <!-- END: Register Info -->
        <!-- BEGIN: Register Form -->
        <form action="{{ route('admin.password.email') }}" method="post"
              class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
            @csrf
            <div
                class="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">Forgot Password</h2>
                <div class="intro-x mt-8">
                    <input type="text" name="email" class="intro-x login__input form-control py-3 px-4 block mt-4"
                           placeholder="Email">
                </div>
                <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                    <button class="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top">Send Email</button>
                </div>
            </div>
        </form>
        <!-- END: Register Form -->
    </div>
</div>

<script src="{{asset('assets/dist/js/app.js')}}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>
@if ($errors->any())
    @foreach ($errors->all() as $error)
        <script type="text/javascript">
            $(function () {
                alertify.error('{{$error}}');
            })
        </script>
    @endforeach
@endif</body>

</html>
