import React from 'react';

const Explore = () => {
  return (
    <div class="gap-1 px-6 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col w-80">
            <h2 class="text-[#0e1b13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Filters</h2>
            <div class="flex flex-wrap gap-3 p-4">
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                All plants
                <input type="radio" class="invisible absolute" name="78e3cc23-b455-4fa8-b06a-803b2e5f56f8"/>
              </label>
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                Trees
                <input type="radio" class="invisible absolute" name="78e3cc23-b455-4fa8-b06a-803b2e5f56f8"/>
              </label>
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                Shrubs
                <input type="radio" class="invisible absolute" name="78e3cc23-b455-4fa8-b06a-803b2e5f56f8"/>
              </label>
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                Vines
                <input type="radio" class="invisible absolute" name="78e3cc23-b455-4fa8-b06a-803b2e5f56f8"/>
              </label>
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                Perennials
                <input type="radio" class="invisible absolute" name="78e3cc23-b455-4fa8-b06a-803b2e5f56f8"/>
              </label>
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                Annuals
                <input type="radio" class="invisible absolute" name="78e3cc23-b455-4fa8-b06a-803b2e5f56f8"/>
              </label>
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                Bulbs
                <input type="radio" class="invisible absolute" name="78e3cc23-b455-4fa8-b06a-803b2e5f56f8"/>
              </label>
            </div>
            <div class="flex flex-wrap gap-3 p-4">
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                All habitats
                <input type="radio" class="invisible absolute" name="a21341ee-8158-45ba-9e1b-fb37b64a7395"/>
              </label>
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                Meadow
                <input type="radio" class="invisible absolute" name="a21341ee-8158-45ba-9e1b-fb37b64a7395"/>
              </label>
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                Woodland
                <input type="radio" class="invisible absolute" name="a21341ee-8158-45ba-9e1b-fb37b64a7395"/>
              </label>
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                Wetland
                <input type="radio" class="invisible absolute" name="a21341ee-8158-45ba-9e1b-fb37b64a7395"/>
              </label>
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                Mountain
                <input type="radio" class="invisible absolute" name="a21341ee-8158-45ba-9e1b-fb37b64a7395"/>
              </label>
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                Desert
                <input type="radio" class="invisible absolute" name="a21341ee-8158-45ba-9e1b-fb37b64a7395"/>
              </label>
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                Urban
                <input type="radio" class="invisible absolute" name="a21341ee-8158-45ba-9e1b-fb37b64a7395"/>
              </label>
            </div>
            <div class="flex flex-wrap gap-3 p-4">
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                All zones
                <input type="radio" class="invisible absolute" name="d7c72de3-bf5b-4127-ba80-b3a5972478aa"/>
              </label>
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                1
                <input type="radio" class="invisible absolute" name="d7c72de3-bf5b-4127-ba80-b3a5972478aa"/>
              </label>
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                2
                <input type="radio" class="invisible absolute" name="d7c72de3-bf5b-4127-ba80-b3a5972478aa"/>
              </label>
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                3
                <input type="radio" class="invisible absolute" name="d7c72de3-bf5b-4127-ba80-b3a5972478aa"/>
              </label>
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                4
                <input type="radio" class="invisible absolute" name="d7c72de3-bf5b-4127-ba80-b3a5972478aa"/>
              </label>
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                5
                <input type="radio" class="invisible absolute" name="d7c72de3-bf5b-4127-ba80-b3a5972478aa"/>
              </label>
              <label class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#d0e6d9] px-4 h-11 text-[#0e1b13] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#16b659] relative cursor-pointer">
                6
                <input type="radio" class="invisible absolute" name="d7c72de3-bf5b-4127-ba80-b3a5972478aa"/>
              </label>
            </div>
            <div class="flex px-4 py-3">
              <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#16b659] text-[#0e1b13] text-base font-bold leading-normal tracking-[0.015em]">
                <span class="truncate">Apply filters</span>
              </button>
            </div>
            <div class="flex px-4 py-3">
              <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#e8f3ec] text-[#0e1b13] text-base font-bold leading-normal tracking-[0.015em]">
                <span class="truncate">Clear filters</span>
              </button>
            </div>
          </div>
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4">
              <div class="flex min-w-72 flex-col gap-3">
                <p class="text-[#0e1b13] tracking-light text-[32px] font-bold leading-tight">All plants</p>
                <p class="text-[#4f966d] text-sm font-normal leading-normal">Showing 100 of 1,000 results</p>
              </div>
            </div>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            </div>
          </div>
        </div>
  );
};

export default Explore;