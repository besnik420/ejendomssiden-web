<?php

namespace App\Http\Resources\v;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PropertyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return parent::toArray($request);
        //if i want to specify what to return >
        //return [
        //  'title' => $this->title, 
        //  'this can have another name' => $this->title,   
        //]
    }
}
