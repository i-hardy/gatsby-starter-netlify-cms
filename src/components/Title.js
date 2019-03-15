import React from 'react';

const Title = ({ title, subheading }) => {
  let subheadingSection = '';
  if (subheading) {
    subheadingSection = (
      <div className="title-subheading__background">
        <h3 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen title-subheading">
          {subheading}
        </h3>
      </div>
    );
  }
  return (
    <div className="full-width-image margin-top-0">
      <div className="title-container">
        <div className="title-heading__background">
          <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen title-heading">
            {title}
          </h1>
        </div>
        {subheadingSection}
      </div>
    </div>
  );
};

Title.defaultProps = {
  title: '',
  subheading: ''
};

export default Title;
