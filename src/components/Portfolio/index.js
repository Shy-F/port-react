import React from 'react';
//insert challenges import//
import budgetTrack from '../../assets/budget-track.png';
import curiousTraveler from '../../assets/curious-traveler.png';
import noteTaker from '../../assets/note-taker.png';
import ruffRuff from '../../assets/ruff-ruff.png';
import workDay from '../../assets/work-day.png';


const Work = () => {
    return (
        <section>
            <h1>My Work</h1>
            <div className='flex-row'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4'>
                    <div style={{ backgroundImage: `url(${budgetTrack})`}} className='shadow-md shadow-white group container rounded-sm justify-center ms-auto content-div intems-center flex'>
                        <div className='pt-10 text-center'>
                            <a href='https://strawberry-sundae-42845.herokuapp.com/'>Deployed</a>
                            <a href='https://github.com/Shy-F/budget-tracker'>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex-row'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4'>
                    <div style={{ backgroundImage: `url(${curiousTraveler})`}} className='shadow-md shadow-white group container rounded-sm justify-center ms-auto content-div intems-center flex'>
                        <div className='pt-10 text-center'>
                            <a href='https://blooming-ridge-28074.herokuapp.com/'>Deployed</a>
                            <a href='https://github.com/Shy-F/roadless-traveled'>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex-row'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4'>
                    <div style={{ backgroundImage: `url(${noteTaker})`}} className='shadow-md shadow-white group container rounded-sm justify-center ms-auto content-div intems-center flex'>
                        <div className='pt-10 text-center'>
                            <a href='https://github.com/Shy-F/note-taker'>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex-row'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4'>
                    <div style={{ backgroundImage: `url(${ruffRuff})`}} className='shadow-md shadow-white group container rounded-sm justify-center ms-auto content-div intems-center flex'>
                        <div className='pt-10 text-center'>
                            <a href='https://shy-f.github.io/ruff-ruff/'>Deployed</a>
                            <a href='https://github.com/Shy-F/ruff-ruff'>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex-row'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4'>
                    <div style={{ backgroundImage: `url(${workDay})`}} className='shadow-md shadow-white group container rounded-sm justify-center ms-auto content-div intems-center flex'>
                        <div className='pt-10 text-center'>
                            <a href='https://shy-f.github.io/plan-it/'>Deployed</a>
                            <a href='https://github.com/Shy-F/plan-it'>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;