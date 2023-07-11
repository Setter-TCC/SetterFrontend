import { render } from '@testing-library/react';
import CustomFeature from '../pages/LandingPage/SetterCall';
import { bottomFeatures, setterCallContent, topFeatures } from '../pages/LandingPage/utils/const';
import SetterFeatures from '../pages/LandingPage/SetterFeatures';

describe('CustomFeature', () => {
  it('should correctly render title and description', () => {
    const { getByText } = render(<CustomFeature />);

    const titleElement = getByText(setterCallContent.title);
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = getByText(setterCallContent.description);
    expect(descriptionElement).toBeInTheDocument();
  });
});


describe('SetterFeatures', () => {
  it('should correctly render the top features', () => {
    const { getByText } = render(<SetterFeatures />);

    topFeatures.forEach((feature) => {
      const titleElement = getByText(feature.title);
      expect(titleElement).toBeInTheDocument();

      const descriptionElement = getByText(feature.description);
      expect(descriptionElement).toBeInTheDocument();
    });
  });

  it('should correctly render the bottom features', () => {
    const { getByText } = render(<SetterFeatures />);

    bottomFeatures.forEach((feature) => {
      const titleElement = getByText(feature.title);
      expect(titleElement).toBeInTheDocument();

      const descriptionElement = getByText(feature.description);
      expect(descriptionElement).toBeInTheDocument();
    });
  });
});
