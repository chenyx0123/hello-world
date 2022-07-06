import { useCallback, useEffect } from "react";

// https://github.com/tiaanduplessis/react-hook-form-persist
const useFormPersist = (
  name,
  { watch, setValue },
  { storage, exclude, include, onDataRestored, validate, dirty } = {
    dirty: false,
    validate: false,
  }
) => {
  const values = watch(include);
  const getStorage = useCallback(
    () => storage ?? window.localStorage,
    [storage]
  );

  useEffect(() => {
    const str = getStorage().getItem(name);
    if (str) {
      const vs = JSON.parse(str);
      const dataRestored = {};

      Object.keys(vs).forEach((key) => {
        const shouldSet = !exclude || !exclude.includes(key);
        if (shouldSet) {
          dataRestored[key] = vs[key];
          setValue(key, vs[key], {
            shouldValidate: validate,
            shouldDirty: dirty,
          });
        }
      });

      if (onDataRestored) {
        onDataRestored(dataRestored);
      }
    }
  }, [dirty, exclude, onDataRestored, name, setValue, validate, getStorage]);

  useEffect(() => {
    getStorage().setItem(name, JSON.stringify(values));
  });

  return {
    clear: () => getStorage().removeItem(name),
  };
};

export default useFormPersist;
