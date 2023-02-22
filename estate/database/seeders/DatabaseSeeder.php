<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\property;
use App\Models\PropertyType;
use App\Models\user_type;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         \App\Models\User::factory(10)->create();

        property::factory(10)->create();

        PropertyType::factory()->create([
            'title' => 'sale',
        ]);
        PropertyType::factory()->create([
            'title' => 'rent',
        ]);
        
        //user types
        user_type::factory()->create([
            'title' => 'user',
        ]);
        user_type::factory()->create([
            'title' => 'agency',
        ]);

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
