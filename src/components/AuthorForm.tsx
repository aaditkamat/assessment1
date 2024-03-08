import { FormProps } from "../types/Props";
import { Author } from "../types/Author";
import { UUID } from "crypto";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

const AuthorForm = ({ onSubmit }: FormProps) => {
  const [author, setAuthor] = useState<Author>({
    id: null,
    name: '',
  });

  const handleClick = () => {
    onSubmit(author);
    setAuthor({
      id: null,
      name: '',
    });
  };

  const handleChange: ChangeEventHandler = (e: ChangeEvent) => {
    const currentElement = e.target as HTMLInputElement;
    const authorId = crypto.randomUUID() as UUID;
    setAuthor({
      id: authorId,
      name: currentElement.value,
    });
  };

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="col-span-full">
            <label
              htmlFor="author-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Author name
            </label>
            <div className="mt-2">
              <input
                id="author_name"
                value={author.name}
                onChange={handleChange}
                type="text"
                required
                className="w-1/2 py-1.5 border-2 text-center drop-shadow-none"
              />
            </div>
          </div>
          <br />
          <div>
            <button
              type="submit"
              className="bg-indigo-600 justify-center rounded-md px-3 py-2 text-white"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AuthorForm;
