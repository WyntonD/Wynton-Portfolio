import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Projects'
  };

  const titleStyle = {
    fontFamily: "'Bodoni Moda', serif"
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12" style={titleStyle}>
                  Wyntluger Beats
                  </h3>
                <p className="m-0" style={titleStyle}>
                  A React based app used for leasing and purchasing of music beats.
                  </p>
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
               Technologies Used: GitHub, ReactJS, NodeJS, Email-JS, Bootstrap-Icons, Framer Motion, jQuery, React Moment, React Player, Ant Design, Ant Design Icons, Semantics UI, Bootstrap, Mongoose, Express, Google fonts
                  </div>
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                    <ButtonGroup>
                      <Button tag="a" color="primary" wideMobile href="https://github.com/WyntonD/Wyntluger">
                        GitHub
                        </Button>
                      <Button tag="a" color="dark" wideMobile href="https://wyntluger.com/">
                        Site
                        </Button>
                    </ButtonGroup>
                  </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/wyntlugerscreenshot.jpg')}
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12" style={titleStyle}>
                  LIRI NODE App
                  </h3>
                <p className="m-0" style={titleStyle}>
                A Node JS project created to display information of music artist’s songs and albums information with Spotify, concerts with Bands in Town, and movies with OMDB.
                  </p>
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Technologies Used: GitHub, NodeJS, Spotify-API, Axios, Moment, DotEnv, File system
                  </div>
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                    <ButtonGroup>
                      <Button tag="a" color="primary" wideMobile href="https://github.com/WyntonD/LIRI-Node-App">
                        GitHub
                        </Button>
                    </ButtonGroup>
                  </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/liriscreenshot.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12" style={titleStyle}>
                  Google Books Search
                  </h3>
                <p className="m-0" style={titleStyle}>
                An React app created with intent to search, save, and/or purchase books using Google’s Book API
                  </p>
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Technologies Used: ReactJS, Express, Mongoose, Path, Bootstrap, NodeJS  
                  </div>
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                    <ButtonGroup>
                      <Button tag="a" color="primary" wideMobile href="https://github.com/WyntonD/Google-Books-Search">
                        GitHub
                        </Button>
                    </ButtonGroup>
                  </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/google.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;