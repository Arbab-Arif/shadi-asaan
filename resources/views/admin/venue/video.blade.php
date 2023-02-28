<x-admin.app>
    <x-slot name="styles">
        <link href="{{asset('assets/css/vjs.zen.css')}}" rel="stylesheet"/>
        <style>
            img, video {
                height: 234px!important;
                max-width: 100%;
            }
        </style>
    </x-slot>
    <x-slot name="title">
        Shadi Asaan - Venue Video
    </x-slot>
    <x-slot name="breadcrumb">
        <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
            <a href="" class="breadcrumb--active">Dashboard</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="" class="breadcrumb--active">Venue</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="javascript:void(0)">Video</a>
        </div>
    </x-slot>
    <div class="content">

        <div class="intro-y grid grid-cols-12 gap-3 sm:gap-6 mt-5 bg-white">
            <div class="intro-y col-span-12 lg:col-span-12">
                <div class="box flex items-center px-3" style="justify-content: space-between">
                    <div
                        class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
                        <h2 class="font-medium text-base mr-auto">
                            Venue Video
                        </h2>
                    </div>
                    <div class="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                        <a href="javascript:;" data-tw-toggle="modal" data-tw-target="#basic-modal-preview"
                           class="btn btn-primary">Add Video</a>
                    </div>
                </div>

            </div>
            @if(count($venue->videos))
                @foreach($venue->videos as $video)
                    <div class="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-6 bg">
                        <video
                            id="my-video"
                            class="video-js"
                            controls
                            preload="auto"
                            width="1000"
                            height="200"
                            poster="MY_VIDEO_POSTER.jpg"
                            data-setup="{}"
                        >
                            <source src="{{$video->getImagePath('video')}}" type="video/mp4">
                        </video>
                        <div class="inline-flex items-center justify-center ml-2">
                            <button class="button btn btn-danger text-white mt-5"
                                    onclick="deleteVideo({{$video->id}})"> Delete
                            </button>

                        </div>
                    </div>
                @endforeach
            @endif
        </div>
        <!-- END: Modal Toggle -->
        <!-- BEGIN: Modal Content -->
        <div id="basic-modal-preview" class="modal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="grid grid-cols-12 gap-6 mt-5">
                        <div class="intro-y col-span-12 lg:col-span-12">
                            <div class="modal-body p-10 text-center">
                                <form action="{{route('admin.venue.video.create')}}" method="post" class="p-5"
                                      id="form-validation"
                                      enctype="multipart/form-data">
                                    @csrf
                                    <input type="hidden" name="venue_id" value="{{$venue->id}}">
                                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Video
                                        </label>
                                        <input multiple type="file" name="video" id="video" accept="video/mp4"
                                               class="cols-3 input w-full border mt-2"
                                               minlength="2" value="{{old('video')}}">
                                    </div>
                                    <button type="submit" class="button btn btn-primary text-white mt-5">
                                        Submit
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <x-slot name="scripts">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.0.0-alpha.1/axios.min.js"
                    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            <script>
                function deleteVideo(id) {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't to delete this video",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#08503d',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            axios.delete('/admin/venue/video/delete/' + id, {})
                            window.location.reload();
                        }
                    })

                }
            </script>
        </x-slot>
</x-admin.app>
