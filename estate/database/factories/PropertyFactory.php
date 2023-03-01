<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Property>
 */
class PropertyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //'title' => fake()->sentence(1),
            //'description' => fake()->paragraph(1),
            //'adress' => fake()->streetAddress(),
            //'tags' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password        



            'adress'=>fake()->streetAddress(),
            'checkWithBroker'=>fake()->sentence(1),
            'tags'=>fake()->paragraph(1),
            'ownerBrokerNotes'=>fake()->sentence(1),
            'energyClass'=>fake()->sentence(1),
            'Region'=>fake()->sentence(1),
            'latitude'=>fake()->sentence(1),
            'longitude'=>fake()->sentence(1),
            'video'=>fake()->sentence(1),
            'videoLink'=>fake()->sentence(1),
            'virtialVideoLink'=>fake()->sentence(1),
            'builtRebuilt'=>fake()->sentence(1),
            'ownerExpensesPerMonth'=>fake()->sentence(1),

            'title'=>fake()->sentence(1),
            'description'=>fake()->sentence(1),

            'price'=>fake()->numberBetween(0,100),
            'priceMonthly'=>fake()->numberBetween(0,100),
            'expensesPerMonth'=>fake()->numberBetween(0,100),
            'status'=>fake()->numberBetween(0,100),
            'livingArea'=>fake()->numberBetween(0,100),
            'groundArea'=>fake()->numberBetween(0,100),
            'rooms'=>fake()->numberBetween(0,100),
            'bedRooms'=>fake()->numberBetween(0,100),
            'bathRooms'=>fake()->numberBetween(0,100),
            'garages'=>fake()->numberBetween(0,100),
            'basementm2'=>fake()->numberBetween(0,100),
            'floors'=>fake()->numberBetween(0,100),
            
            'availableFrom'=>fake()->date(),




        ];
    }
}
