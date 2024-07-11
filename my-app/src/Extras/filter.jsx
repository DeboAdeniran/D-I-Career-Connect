import React, { useState, useEffect } from 'react';
import arrowleft from '../SVG Files/arrowleft.svg';
import arrowright from '../SVG Files/arrowright.svg';
import '../Styles/filter.css';

function Filter({ onApplyFilters, selectedFilters, onRemoveFilter }) {
  const [isDropdown, setIsDropdown] = useState(false);
  const [workTypes, setWorkTypes] = useState([]);
  const [officeTypes, setOfficeTypes] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('Select Country');
  const [experience, setExperience] = useState([]);

  // Update state when selectedFilters prop changes
  useEffect(() => {
    if (selectedFilters) {
      setWorkTypes(selectedFilters.workTypes || []);
      setOfficeTypes(selectedFilters.officeTypes || []);
      setSelectedCountry(selectedFilters.country || 'Select Country');
      setExperience(selectedFilters.experience || []);
    }
  }, [selectedFilters]);

  const handleDropdownClick = () => {
    setIsDropdown(!isDropdown);
  };

  const handleWorkTypeChange = (type) => {
    const newWorkTypes = [...workTypes];
    if (newWorkTypes.includes(type)) {
      newWorkTypes.splice(newWorkTypes.indexOf(type), 1);
    } else {
      newWorkTypes.push(type);
    }
    setWorkTypes(newWorkTypes);
  };

  const handleOfficeTypeChange = (type) => {
    const newOfficeTypes = [...officeTypes];
    if (newOfficeTypes.includes(type)) {
      newOfficeTypes.splice(newOfficeTypes.indexOf(type), 1);
    } else {
      newOfficeTypes.push(type);
    }
    setOfficeTypes(newOfficeTypes);
  };

  const handleExperienceChange = (range) => {
    const newExperience = [...experience];
    const existingRangeIndex = newExperience.findIndex(exp => exp.min === range.min && exp.max === range.max);
    if (existingRangeIndex !== -1) {
      newExperience.splice(existingRangeIndex, 1);
    } else {
      newExperience.push(range);
    }
    setExperience(newExperience);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const applyFilters = () => {
    const filters = {
      workTypes,
      officeTypes,
      country: selectedCountry === 'Select Country' ? null : selectedCountry,
      experience
    };
    onApplyFilters(filters);
  };

  return (
    <div className='dropdown'>
      <div className='filter'>
        <p onClick={handleDropdownClick}>Filters</p>
        <img src={isDropdown ? arrowleft : arrowright} 
          alt="" onClick={handleDropdownClick} />
      </div>
      <div className={isDropdown ? 'show' : ''} id='ddcont'>
        <div className='worktype grp'>
          <p className='dropdown_p'>Work Type</p>
          <div className='wrapper'>
            <input type="checkbox" id='FT' checked={workTypes.includes('FULLTIME')} onChange={() => handleWorkTypeChange('FULLTIME')} />
            <label htmlFor="FT">Full-Time</label>
          </div>
          <div className='wrapper'>
            <input type="checkbox" id='pT' checked={workTypes.includes('PARTTIME')} onChange={() => handleWorkTypeChange('PARTTIME')} />
            <label htmlFor="pT">Part-Time</label>
          </div>
          <div className='wrapper'>
            <input type="checkbox" id='ITN' checked={workTypes.includes('INTERN')} onChange={() => handleWorkTypeChange('INTERN')} />
            <label htmlFor="ITN">Internship</label>
          </div>
          <div className='wrapper'>
            <input type="checkbox" id='Cnctr' checked={workTypes.includes('CONTRACTOR')} onChange={() => handleWorkTypeChange('CONTRACTOR')} />
            <label htmlFor="Cnctr">Contract</label>
          </div>
          <div className='wrapper'>
            <input type="checkbox" id='Tmpr' checked={workTypes.includes('TEMPORARY')} onChange={() => handleWorkTypeChange('TEMPORARY')} />
            <label htmlFor="Tmpr">Temporary</label>
          </div>
          <div className='wrapper'>
            <input type="checkbox" id='Vltr' checked={workTypes.includes('VOLUNTEER')} onChange={() => handleWorkTypeChange('VOLUNTEER')} />
            <label htmlFor="Vltr">Volunteer</label>
          </div>
        </div>
        <div className='officetype grp'>
          <p className='dropdown_p'>Office Type</p>
          <div className='wrapper'>
            <input type="checkbox" id='in_office' checked={officeTypes.includes('IN_OFFICE')} onChange={() => handleOfficeTypeChange('IN_OFFICE')} />
            <label htmlFor="in_office">In-Office</label>
          </div>
          <div className='wrapper'>
            <input type="checkbox" id='remote' checked={officeTypes.includes('REMOTE')} onChange={() => handleOfficeTypeChange('REMOTE')} />
            <label htmlFor="remote">Remote</label>
          </div>
        </div>
        <div className='location grp'>
          <p className='dropdown_p'>Location</p>
          <p className='selected_country' onClick={() => handleCountrySelect(selectedCountry)}>
            {selectedCountry}
          </p>
        </div>
        <div className='workexpri grp'>
          <p className='dropdown_p'>Work Experience</p>
          <div className='wrapper'>
            <input type="checkbox" id='no_exp' checked={experience.some(exp => exp.min === 0 && exp.max === 1)} onChange={() => handleExperienceChange({ min: 0, max: 1 })} />
            <label htmlFor="no_exp">0 Experience</label>
          </div>
          <div className='wrapper'>
            <input type="checkbox" id='first_exp' checked={experience.some(exp => exp.min === 1 && exp.max === 2)} onChange={() => handleExperienceChange({ min: 1, max: 2 })} />
            <label htmlFor="first_exp">1-2 Years Experience</label>
          </div>
          <div className='wrapper'>
            <input type="checkbox" id='second_exp' checked={experience.some(exp => exp.min === 2 && exp.max === 5)} onChange={() => handleExperienceChange({ min: 2, max: 5 })} />
            <label htmlFor="second_exp">2-5 Years Experience</label>
          </div>
          <div className='wrapper'>
            <input type="checkbox" id='third_exp' checked={experience.some(exp => exp.min === 5 && exp.max === 10)} onChange={() => handleExperienceChange({ min: 5, max: 10 })} />
            <label htmlFor="third_exp">5-10 Years Experience</label>
          </div>
          <div className='wrapper'>
            <input type="checkbox" id='last_exp' checked={experience.some(exp => exp.min === 10)} onChange={() => handleExperienceChange({ min: 10, max: Infinity })} />
            <label htmlFor="last_exp">10+ Years Experience</label>
          </div>
        </div>
        <button className='applyFunction' onClick={applyFilters}>Apply</button>
      </div>
    </div>
  );
}

export default Filter;
