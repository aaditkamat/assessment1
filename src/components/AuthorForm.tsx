import { FormProps } from "../types/Props";
import { Author } from "../types/Author";
import { UUID } from "crypto";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

const AuthorForm = ({onSubmit}: FormProps) => {
    const [author, setAuthor] = useState<Author>({
        id: null,
        name: ''
    });

    const handleClick = () => {
        onSubmit(author);
        setAuthor({
            id: null,
            name: ''
        });
    }

    const handleChange: ChangeEventHandler = (e: ChangeEvent) => {
        const currentElement = e.target as HTMLInputElement;
        const authorId = crypto.randomUUID() as UUID;
        setAuthor({
          id: authorId,
          name: currentElement.value
        });
    }

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> 
          <form action="#">
            <div className="">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Author name
              </label>
              <div className="mt-2">
                <input
                  id="author_name"
                  value={author.name}
                  onChange={handleChange}
                  type="text"
                  required
                  className="block w-full border-2 py-1.5 text-black text-center"
                />
              </div>
            </div>
            <br />
            <div>
              <button
                type="submit"
                className="bg-indigo-600 justify-center rounded-md px-3 py-3 text-white"
                onClick={handleClick}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
    )
}

export default AuthorForm;