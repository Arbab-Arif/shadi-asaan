<?php

namespace Tests\Unit;

use App\Models\Vendor;
use App\Traits\FileHelper;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class FileHelperTest extends TestCase
{
    use FileHelper;

    protected $imagePath;

    /** @test */
    public function it_update_image_storage_disk()
    {
        $this->it_saves_image_storage_disk();

        $newImagePath = $this->updateFileAndGetName(
            UploadedFile::fake()->image('some-image-1.jpg'),
            $this->imagePath,
            'App\\Models\\Category'
        );

        Storage::disk('public')->assertMissing($this->imagePath);
        Storage::disk('public')->assertExists($newImagePath);
    }

    /** @test */
    public function it_saves_image_storage_disk()
    {
        $this->imagePath = $this->saveFileAndGetName(
            UploadedFile::fake()->image('some-image.jpg'),
            'App\\Models\\Category'
        );

        Storage::disk('public')->assertExists($this->imagePath);
    }

    /** @test */
    function it_delete_image_from_storage()
    {
        $this->it_saves_image_storage_disk();

        $this->deleteFile($this->imagePath);

        Storage::disk('public')->assertMissing($this->imagePath);
    }

    /** @test */
//    function it_returns_no_image_path_if_image_not_exists()
//    {
//        $make = new Make([
//            'logo' => 'makes/something.jpg'
//        ]);
//
//        $this->assertEquals(
//            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
//            $make->getImagePath('logo')
//        );
//    }

    /** @test */
    function it_returns_image_path_if_image_exists()
    {
        $imagePath = UploadedFile::fake()->image('something.jpg')->store('vendors');
        $make = new Vendor([
            'cnic_front' => $imagePath
        ]);

        $this->assertEquals(
            asset("storage/{$imagePath}"),
            $make->getImagePath('cnic_front')
        );
    }

}
