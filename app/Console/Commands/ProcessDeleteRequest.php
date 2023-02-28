<?php

namespace App\Console\Commands;

use App\Models\DeleteRequest;
use Illuminate\Console\Command;

class ProcessDeleteRequest extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'shadiasaan:process-delete-requests';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Process Delete Requests';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        DeleteRequest::query()
            ->where(['delete_at' => today()])
            ->get()
            ->each
            ->user()
            ->delete();
    }
}
