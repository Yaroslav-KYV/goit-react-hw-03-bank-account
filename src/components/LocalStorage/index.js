import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const set = (description, value) => {
  try {
    localStorage.setItem(description, JSON.stringify(value));
  } catch (error) {
    toast.warning('Failed to save to local storage!');
  }
};

const get = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return null;
  }
};

export default { set, get };
