<div class="content">
    <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">
            Customer FeedBack List
        </h2>
        {{--        <h2 class="text-right font-medium">--}}
        {{--            <a href="{{ route('admin.vendor.create') }}">--}}
        {{--                <button type="button" class="button btn btn-primary text-white mt-5">Create</button>--}}
        {{--            </a>--}}
        {{--        </h2>--}}
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-12">
            <div class="intro-y box">
                <div class="p-5" id="form-validation">
                    <div class="flex flex-wrap px-3  mb-3">
                        <div class="w-full md:w-full">
                            <label>Search:</label>
                            <input type="text" name="search" wire:model="search" id="search"
                                   class="cols-3 input w-full border mt-2 form-control"
                                   placeholder="Search By customer venue"
                                   minlength="2">
                        </div>
                    </div>
                    <div class="preview">
                        <div class="overflow-x-auto">
                            @if(count($customerFeedbacks))
                                <table class="table scrollable">
                                    <thead>
                                    <tr>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">#</th>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">Customer Name</th>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">Venue</th>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">Rating</th>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">Message
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($customerFeedbacks as $key=> $feedback)
                                        <tr id="">
                                            <td class="border-b whitespace-no-wrap">{{$key + 1}}</td>
                                            <td class="border-b whitespace-no-wrap">{{$feedback->user->name}}</td>
                                            <td class="border-b whitespace-no-wrap">{{$feedback->venue->name}}</td>

                                            <td class="border-b whitespace-no-wrap">
                                                @for($l=1; $l <= 6 ;$l++)
                                                    <i data-feather="star"
                                                       class="fa fa-star @if ($l <= $feedback->rating) text-warning @endif"
                                                    "></i>
                                                @endfor
                                            </td>
                                            <td class="border-b whitespace-no-wrap">{{$feedback->message}}</td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                                <br>
                                @if($customerFeedbacks->total() > $customerFeedbacks->perPage())
                                    {{ $customerFeedbacks->links() }}
                                @else
                                    Showing {{ $customerFeedbacks->firstItem() }}
                                    to {{ $customerFeedbacks->lastItem() }} out
                                    of {{ $customerFeedbacks->total() }}
                                    results
                                @endif
                            @else
                                <div
                                    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-3"
                                    role="alert">
                                    <span class="block sm:inline">There Is No Record Found.</span>
                                    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                                                                </span>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
