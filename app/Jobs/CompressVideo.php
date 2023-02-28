<?php

namespace App\Jobs;

use FFMpeg\Coordinate\Dimension;
use FFMpeg\Format\Video\X264;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use ProtoneMedia\LaravelFFMpeg\Support\FFMpeg;

class CompressVideo implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(protected $file)
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $lowBitrateFormat = (new X264('libmp3lame', 'libx264'))->setKiloBitrate(480);
        FFMpeg::fromDisk('public')
            ->open($this->file->localPath)
            ->addFilter(function ($filters) {
                $filters->resize(new Dimension(852, 480));
            })
            ->export()
            ->toDisk('s3')
            ->inFormat($lowBitrateFormat)
            ->save($this->file->s3Path);

        Storage::disk('public')->delete($this->file->localPath);
    }
}
