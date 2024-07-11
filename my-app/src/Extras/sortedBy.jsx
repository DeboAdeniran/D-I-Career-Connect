import React, { useEffect, useRef } from 'react';
import closeIcon from '../SVG Files/close.svg'; // Import close icon
import '../Styles/sortedBy.css';

function SortedBy({ filters, onRemoveFilter, onClose }) {
    const cardRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                onClose();  // Call onClose function when clicking outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const handleRemoveFilter = (filterType, value) => {
        onRemoveFilter(filterType, value);
    };

    const renderFilters = () => {
        if (!filters || Object.keys(filters).length === 0) {
            return (
                <div className='sbcard sbtitle'>
                    <p>No filters applied</p>
                </div>
            );
        }

        const { workTypes, officeTypes, country, experience } = filters;

        return (
            <div>
                <div className='sbcard'>
                    <div className='sbtitle'><p>Sorted By:</p></div>
                    <div className='sbcontent'>
                        {workTypes.length > 0 && (
                            <div className='sbitem'>
                                <p>Work Types:</p>
                                <div className='sbdiv'>
                                    {workTypes.map((type, index) => (
                                        <p key={index}>
                                            {type}
                                            <img
                                                src={closeIcon}
                                                alt="Close"
                                                className="close-icon"
                                                onClick={() => handleRemoveFilter('workTypes', type)}
                                                height="20px" width="20px"
                                            />
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                        {officeTypes.length > 0 && (
                            <div className='sbitem'>
                                <p>Office Types:</p>
                                <div className='sbdiv'>
                                    {officeTypes.map((type, index) => (
                                        <p key={index}>
                                            {type}
                                            <img
                                                src={closeIcon}
                                                alt="Close"
                                                className="close-icon"
                                                onClick={() => handleRemoveFilter('officeTypes', type)}
                                            />
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                        {country && (
                            <div className='sbitem'>
                                <p>Country:</p>
                                <div className='sbdiv'>
                                    <p>
                                        {country}
                                        <img
                                            src={closeIcon}
                                            alt="Close"
                                            className="close-icon"
                                            onClick={() => handleRemoveFilter('country')}
                                        />
                                    </p>
                                </div>
                            </div>
                        )}
                        {experience.length > 0 && (
                            <div className='sbitem'>
                                <p>Experience:</p>
                                <div className='sbdiv'>
                                    {experience.map((range, index) => (
                                        <p key={index}>
                                            {range.min} - {range.max === Infinity ? '10+' : range.max} Years
                                            <img
                                                src={closeIcon}
                                                alt="Close"
                                                className="close-icon"
                                                onClick={() => handleRemoveFilter('experience', range)}
                                            />
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='sbcardcontainer' ref={cardRef}>
            {renderFilters()}
        </div>
    );
}

export default SortedBy;
