import { renderHook } from '@testing-library/react-hooks';
import { AnyAction, Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { useAddStoryViewModel } from '../AddStory.viewModel';
import { PATHS } from '../../../data';
import { IAddStoryService } from '../AddStory.types';
import { enENTranslate } from '../../../languages/en-EN';

const mockStore = configureMockStore();

const serviceMock: IAddStoryService = {
  callForStoryText: jest.fn(),
};

jest.mock('react-router-dom', () => ({
  ...(jest.createMockFromModule('react-router-dom') as any),
  useNavigate: jest.fn().mockReturnValue(jest.fn()),
}));

function getWrapper(store: Store<any, AnyAction>): React.FC {
  return ({ children }: { children?: React.ReactNode }): React.ReactElement => (
    <Provider store={store}>{children}</Provider>
  );
}

describe('AddStory.viewModel', () => {
  let wrapper: any;

  beforeEach(() => {
    const store = mockStore({
      languages: {
        translations: enENTranslate,
      },
    });
    wrapper = getWrapper(store);
  });

  it('Should return expected data', () => {
    //when
    const { result } = renderHook(() => useAddStoryViewModel(PATHS, serviceMock), { wrapper });
    //then
    expect(result.current.translations).toBeTruthy();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.formik).toBeTruthy();
  });
});
