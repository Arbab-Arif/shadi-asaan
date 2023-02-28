<?php

namespace App\Console\Commands;

use App\Models\Permission;
use App\Providers\RoleProvider;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;

class SyncRolePermission extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'permissions:sync';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        foreach ($this->getAllPermissions() as $permission) {
            Permission::firstOrCreate([
                'label' => $permission['label'],
                'slug'  => $permission['slug']
            ]);
        }
        Cache::forget('roles');
        RoleProvider::define();
    }

    protected function getAllPermissions()
    {
        return [
            [
                'label' => 'Vendor',
                'slug'  => 'vendor'
            ],
            [
                'label' => 'Business Type',
                'slug'  => 'business_type'
            ],
            [
                'label' => 'VenueCollection',
                'slug'  => 'venue'
            ],
            [
                'label' => 'Customer',
                'slug'  => 'customer'
            ],
            [
                'label' => 'Customer FeedBack',
                'slug'  => 'customer_feed_back'
            ],
            [
                'label' => 'Role Management',
                'slug'  => 'role_management'
            ],
            [
                'label' => 'Inquire',
                'slug'  => 'inquire'
            ],
            [
                'label' => 'Inquire',
                'slug'  => 'inquire'
            ],
            [
                'label' => 'Subscription',
                'slug'  => 'subscription'
            ],
            [
                'label' => 'Admin Management',
                'slug'  => 'admin_management'
            ],
            [
                'label' => 'Slider',
                'slug'  => 'slider'
            ]
        ];
    }
}
