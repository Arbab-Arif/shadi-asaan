<x-admin.app>
    <x-slot name="styles">
        <link href="{{asset('assets/dist/css/image-uploader/image-uploader.min.css')}}" rel="stylesheet"
              type="text/css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    </x-slot>
    <x-slot name="title">
        Shadi Asaan - Create Venue
    </x-slot>
    <x-slot name="breadcrumb">
        <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
            <a href="" class="breadcrumb--active">Dashboard</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="" class="breadcrumb--active">Venue</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="javascript:void(0)">Create</a>
        </div>
    </x-slot>
    <div class="content">
        <div class="intro-y flex items-center mt-8">
            <h2 class="text-lg font-medium mr-auto">
                Create Venue
            </h2>
        </div>
        <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="intro-y col-span-12 lg:col-span-12">
                <div class="intro-y box">
                    <div class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
                        <h2 class="font-medium text-base mr-auto">
                            Venue
                        </h2>
                    </div>
                    <form action="{{route('admin.venue.store')}}" method="post" class="p-5" id="form-validation"
                          enctype="multipart/form-data">
                        @csrf
                        <div class="preview">
                            <div class="flex flex-wrap -mx-3 mb-2 sm:grid grid-cols-2 gap-2">
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Select Vendor
                                    </label>
                                    <select name="vendor_id" class="form-select mt-2 sm:mr-2"
                                            aria-label=".form-select-sm example">
                                        <option value="">Select Vendor</option>
                                        @foreach($vendors as $vendor)
                                            <option value="{{$vendor->id}}">{{$vendor->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Select Business Type
                                    </label>
                                    <select name="business_type_id" id="business_type_id"
                                            class="form-select mt-2 sm:mr-2"
                                            aria-label=".form-select-sm example">
                                        <option value="">Select Business Type</option>
                                        @foreach($businessTypes as $businessType)
                                            <option value="{{$businessType->id}}">{{$businessType->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="" id="business_type_capacity">


                                </div>
                                {{--                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">--}}
                                {{--                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">--}}
                                {{--                                        Select Area--}}
                                {{--                                    </label>--}}
                                {{--                                    <select name="area_id" class="form-select mt-2 sm:mr-2"--}}
                                {{--                                            aria-label=".form-select-sm example">--}}
                                {{--                                        <option value="">Select Area</option>--}}
                                {{--                                        @foreach($areas as $area)--}}
                                {{--                                            <option value="{{$area->id}}">{{$area->name}}</option>--}}
                                {{--                                        @endforeach--}}
                                {{--                                    </select>--}}
                                {{--                                </div>--}}
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Select Status
                                    </label>
                                    <select class="form-select mt-2 sm:mr-2"
                                            aria-label=".form-select-sm example" name="status">
                                        <option value="">Select Status</option>
                                        <option value="approve">Approve</option>
                                        <option value="pending">Pending</option>
                                        <option value="reject">Reject</option>
                                    </select>
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Business Name
                                    </label>
                                    <input type="text" name="name" id="name"
                                           class="cols-3 input w-full border mt-2" placeholder="Enter Name"
                                           minlength="2" value="{{old('name')}}">
                                </div>
                                {{--                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">--}}
                                {{--                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">--}}
                                {{--                                        Manager Phone--}}
                                {{--                                    </label>--}}
                                {{--                                    <input type="number" name="manager_phone" id="manager_phone"--}}
                                {{--                                           onKeyPress="if(this.value.length==11) return false;"--}}
                                {{--                                           class="cols-3 input w-full border mt-2" placeholder="Enter Manager Phone"--}}
                                {{--                                           minlength="2" value="{{old('manager_phone')}}">--}}
                                {{--                                </div>--}}
                                {{--                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">--}}
                                {{--                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">--}}
                                {{--                                        Per Head--}}
                                {{--                                    </label>--}}
                                {{--                                    <input type="number" name="per_head" id="per_head"--}}
                                {{--                                           class="cols-3 input w-full border mt-2" placeholder="Enter Per Head"--}}
                                {{--                                           minlength="2" value="{{old('per_head')}}">--}}
                                {{--                                </div>--}}
                                {{--                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">--}}
                                {{--                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">--}}
                                {{--                                        Rent Amount--}}
                                {{--                                    </label>--}}
                                {{--                                    <input type="number" name="rent_amount" id="rent_amount"--}}
                                {{--                                           class="cols-3 input w-full border mt-2" placeholder="Enter Per Head"--}}
                                {{--                                           minlength="2" value="{{old('rent_amount')}}">--}}
                                {{--                                </div>--}}
                                {{--                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">--}}
                                {{--                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">--}}
                                {{--                                        Person Capacity--}}
                                {{--                                    </label>--}}
                                {{--                                    <input type="number" name="person_capacity" id="person_capacity"--}}
                                {{--                                           class="cols-3 input w-full border mt-2" placeholder="Enter Person Capacity"--}}
                                {{--                                           minlength="2" value="{{old('person_capacity')}}">--}}
                                {{--                                </div>--}}
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Location Address
                                    </label>
                                    <input type="text" name="location_address" id="location_address"
                                           class="cols-3 input w-full border mt-2" placeholder="Enter Location Address"
                                           minlength="2" value="">
                                </div>

                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0" style="display: none">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Latitude
                                    </label>
                                    <input type="text" name="latitude" id="latitude"
                                           class="cols-3 input w-full border mt-2" placeholder="Enter Latitude"
                                           minlength="2" value="{{old('latitude')}}">
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0" style="display: none">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Longitude
                                    </label>
                                    <input type="text" name="longitude" id="longitude"
                                           class="cols-3 input w-full border mt-2" placeholder="Enter Longitude"
                                           minlength="2" value="{{old('longitude')}}">
                                </div>
                                <div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Full Address
                                    </label>
                                    <input type="text" name="address" id="address"
                                           class="cols-3 input w-full border mt-2" placeholder="Full Address">
                                </div>
                                <div class="flex flex-wrap -mx-3 mb-2 sm:grid grid-cols-2 gap-2">
                                    <div class="w-full md:w-2/1 px-3 mb-6 md:mb-0">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Banner/Logo Image
                                        </label>
                                        <input type="file" name="feature_image" id="feature_image"
                                               class="cols-3 input w-full border mt-2" accept="image/*"
                                               minlength="2" value="{{old('feature_image')}}">
                                    </div>
                                    {{--                                    <div class="w-full md:w-2/1 px-3 mb-6 md:mb-0">--}}
                                    {{--                                        <label--}}
                                    {{--                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">--}}
                                    {{--                                            Video--}}
                                    {{--                                        </label>--}}
                                    {{--                                        <input multiple type="file" name="video[]" id="video" accept="video/mp4"--}}
                                    {{--                                               class="cols-3 input w-full border mt-2"--}}
                                    {{--                                               minlength="2" value="{{old('video')}}">--}}
                                    {{--                                    </div>--}}
                                </div>
                                <div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        description
                                    </label>
                                    <textarea name="description" class="cols-3 input w-full border mt-2"
                                              id="description" cols="30" rows="10">{{old('description')}}</textarea>
                                </div>
                                <div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        gallery
                                    </label>
                                    <div class="image-gallery-uploader"></div>
                                </div>
                            </div>
                            <button type="submit" class="button btn btn-primary text-white mt-5">
                                Submit
                            </button>
                            <a class="btn btn-danger w-24 inline-block mr-1 mb-2" href="{{route('admin.venue.index')}}">
                                Cancel
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <x-slot name="scripts">
        <script src="{{asset('assets/dist/js/image-uploader/image-uploader.min.js')}}"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key={{env('GOOGLE_MAP_KEY')}}&libraries=places"></script>
        <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

        <script>
            $('#business_type_id').change(function () {
                var businessTypeId = $(this).val();

                // alert(businessTypeId);

                $.ajax({
                    url: '/admin/business_type_capacity',
                    type: 'get',
                    data: {id: businessTypeId},
                    success: function (response) {
                        console.log(response)

                        $('#business_type_capacity').html(
                            "<div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>" +
                            "<label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>" +
                            "Person Capacity" +
                            "</label>" +
                            "<select id='person_capacity' name='person_capacity' class='w-full select2-hidden-accessible'></select>" +
                            "</div>"
                        );
                        // for(var i=0;i<response.length;i++){
                        //     $('#first_selected').append('<option value="'+response.label[i]+'">'+response.label[i]+'</option>');
                        // }

                        response.forEach(function (capacity) {
                            $('#person_capacity').append('<option value="' + capacity.label + '">' + capacity.label + '</option>');
                        });


                        // if (response.status === 200) {
                        //     console.log('response: ', response);
                        // }
                    },
                    error: function (error) {
                        console.log(error);
                    }
                });

                // alert(businessTypeId);
            })
        </script>

        <script>
            function initMap() {
                const map = new google.maps.Map(document.getElementById("map"), {
                    center: {lat: 50.064192, lng: -130.605469},
                    zoom: 3,
                });
                const card = document.getElementById("pac-card");

                map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

                const center = {lat: 50.064192, lng: -130.605469};
                // Create a bounding box with sides ~10km away from the center point
                const defaultBounds = {
                    north: center.lat + 0.1,
                    south: center.lat - 0.1,
                    east: center.lng + 0.1,
                    west: center.lng - 0.1,
                };
                const input = document.getElementById("pac-input");
                const options = {
                    bounds: defaultBounds,
                    componentRestrictions: {country: "pk"},
                    fields: ["address_components", "geometry", "icon", "name"],
                    strictBounds: false,
                    types: ["establishment"],
                };
                const autocomplete = new google.maps.places.Autocomplete(input, options);

                // Set initial restriction to the greater list of countries.
                autocomplete.setComponentRestrictions({
                    country: ["pk"],
                });

                const southwest = {lat: 5.6108, lng: 136.589326};
                const northeast = {lat: 61.179287, lng: 2.64325};
                const newBounds = new google.maps.LatLngBounds(southwest, northeast);

                autocomplete.setBounds(newBounds);

                const infowindow = new google.maps.InfoWindow();
                const infowindowContent = document.getElementById("infowindow-content");

                infowindow.setContent(infowindowContent);

                const marker = new google.maps.Marker({
                    map,
                    anchorPoint: new google.maps.Point(0, -29),
                });

                autocomplete.addListener("place_changed", () => {
                    infowindow.close();
                    marker.setVisible(false);

                    const place = autocomplete.getPlace();

                    if (!place.geometry || !place.geometry.location) {
                        // User entered the name of a Place that was not suggested and
                        // pressed the Enter key, or the Place Details request failed.
                        window.alert("No details available for input: '" + place.name + "'");
                        return;
                    }

                    // If the place has a geometry, then present it on a map.
                    if (place.geometry.viewport) {
                        map.fitBounds(place.geometry.viewport);
                    } else {
                        map.setCenter(place.geometry.location);
                        map.setZoom(17); // Why 17? Because it looks good.
                    }

                    marker.setPosition(place.geometry.location);
                    marker.setVisible(true);

                    let address = "";

                    if (place.address_components) {
                        address = [
                            (place.address_components[0] &&
                                place.address_components[0].short_name) ||
                            "",
                            (place.address_components[1] &&
                                place.address_components[1].short_name) ||
                            "",
                            (place.address_components[2] &&
                                place.address_components[2].short_name) ||
                            "",
                        ].join(" ");
                    }

                    infowindowContent.children["place-icon"].src = place.icon;
                    infowindowContent.children["place-name"].textContent = place.name;
                    infowindowContent.children["place-address"].textContent = address;
                    infowindow.open(map, marker);
                });

                // Sets a listener on a given radio button. The radio buttons specify
                // the countries used to restrict the autocomplete search.
                function setupClickListener(id, countries) {
                    const radioButton = document.getElementById(id);

                    radioButton.addEventListener("click", () => {
                        autocomplete.setComponentRestrictions({country: countries});
                    });
                }

                setupClickListener("changecountry-pk", "pk");
                setupClickListener("changecountry-usa-and-uot", [
                    "pk",

                ]);
            }

            $(document).ready(function () {
                $(window).keydown(function (event) {
                    if (event.keyCode == 13) {
                        event.preventDefault();
                        return false;
                    }
                });
                $("#latitude").addClass("d-none");
                $("#longtitude").addClass("d-none");
            });
            google.maps.event.addDomListener(window, 'load', initialize);

            function initialize() {
                var input = document.getElementById('location_address');
                var autocomplete = new google.maps.places.Autocomplete(input);

                autocomplete.addListener('place_changed', function () {
                    var place = autocomplete.getPlace();
                    $('#latitude').val(place.geometry['location'].lat());
                    $('#longitude').val(place.geometry['location'].lng());

                    $("#latitude").removeClass("d-none");
                    $("#longtitude").removeClass("d-none");
                });
            }

            $(document).ready(function () {
                var images = @json(isset($gallaries) ? $gallaries : []);

                $('.image-gallery-uploader').imageUploader({
                    preloaded: images
                });
            })
        </script>
    </x-slot>
</x-admin.app>
