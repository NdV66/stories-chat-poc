import { render, screen } from '@testing-library/react';
import { AddStory } from '../AddStory';
import { PATHS } from '../../../data';
import { IAddStoryService } from '../AddStory.types';
import * as AddStoryViewModel from '../AddStory.viewModel';
import { enENTranslate } from '../../../languages/en-EN';

const formikMock: any = {
  handleSubmit: jest.fn(),
  values: {
    childName: '',
    childAge: '',
    topic: '',
    numberOfWords: '',
  },
  touched: {
    childName: false,
    childAge: false,
    topic: false,
    numberOfWords: false,
  },
  errors: {
    childName: '',
    childAge: '',
    topic: '',
    numberOfWords: '',
  },
};

const serviceMock = {} as IAddStoryService;

describe('AddStory', () => {
  it('Should render correctly with all fields', () => {
    //given
    const spy = jest.spyOn(AddStoryViewModel, 'useAddStoryViewModel');
    spy.mockImplementationOnce(() => ({
      formik: formikMock,
      translations: enENTranslate,
      isLoading: false,
    }));
    //when
    render(<AddStory paths={PATHS} service={serviceMock} />);
    //then
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')[0]).toHaveAttribute('name', 'childName');
    expect(screen.getAllByRole('textbox')[1]).toHaveAttribute('name', 'childAge');
    expect(screen.getAllByRole('textbox')[2]).toHaveAttribute('name', 'topic');
    expect(screen.getAllByRole('textbox')[3]).toHaveAttribute('name', 'numberOfWords');
    expect(screen.getByRole('button')).toHaveTextContent('Imagine!');
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
  });

  it("Should show a loading element, when it's loading", () => {
    //given
    const spy = jest.spyOn(AddStoryViewModel, 'useAddStoryViewModel');
    spy.mockImplementationOnce(() => ({
      formik: formikMock,
      translations: enENTranslate,
      isLoading: true,
    }));
    //when
    render(<AddStory paths={PATHS} service={serviceMock} />);
    //then
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
