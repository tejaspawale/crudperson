import { Save, RotateCcw } from 'lucide-react';

const PersonForm = ({ methods, onFormReset, onFormSubmit }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;



    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6" style={{ marginBottom: '5px' }}>
            <form className="space-y-4" onSubmit={handleSubmit(onFormSubmit)}>
                <input
                    type="hidden" {...register("id")}
                />
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name*
                        </label>
                        <input
                            type="text" {...register("firstName", {
                                required: true,
                                maxLength: 30
                            })}
                            className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2" placeholder="Enter first name"
                        />

                        {errors.firstName?.type === 'required' && <p className="mt-1 text-sm text-red-600 flex items-center">
                            FirstName is  required
                        </p>}

                        {errors.firstName?.type === 'maxLength' && <p className="mt-1 text-sm text-red-600 flex items-center">
                            FirstName can not exceed 30 characters
                        </p>}

                    </div>

                    <div className="flex-1">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name*
                        </label>
                        <input
                            type="text"
                            {...register("lastName", {
                                required: true,
                                maxLength: 30
                            })}
                            className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2" placeholder="Enter last name"
                        />
                        {errors.lastName?.type === 'required' && <p className="mt-1 text-sm text-red-600 flex items-center">
                            LastName is  required
                        </p>}

                        {errors.lastName?.type === 'maxLength' && <p className="mt-1 text-sm text-red-600 flex items-center">
                            LastName can not exceed 30 characters
                        </p>}
                    </div>
                </div>

                <div className="flex-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address*
                    </label>

                    <input
                        id="email"
                        type="email"
                        {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email address",
                        },
                        })}
                        className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2"
                        placeholder="Enter email address"
                    />

                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">

                        <div className="flex-1">
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                            Age*
                        </label>
                        <input
                        id="age"
                        type="number"
                        {...register("age", {
                            required: "Age is required",
                            min: { value: 1, message: "Age must be greater than 0" },
                            max: { value: 120, message: "Enter valid age" },
                            valueAsNumber: true
                        })}
                        className="w-full px-4 py-3 rounded-lg border"
                        placeholder="Enter age"
                        />

                        {errors.age?.type === 'required' && <p className="mt-1 text-sm text-red-600 flex items-center">
                            Age is  required
                        </p>}

                        {errors.firstName?.type === 'maxLength' && <p className="mt-1 text-sm text-red-600 flex items-center">
                            FirstName can not exceed 30 characters
                        </p>}

                        </div>
                                        {/* Balance */}
                    <div className="flex-1">
                        <label htmlFor="balance" className="block text-sm font-medium text-gray-700 mb-2">
                        Saving Balance*
                        </label>
                        <input
                        id="balance"
                        type="number"
                        step="0.01"
                        {...register("balance", {
                            required: "Balance is required",
                            min: { value: 0, message: "Balance cannot be negative" },
                            valueAsNumber: true
                        })}
                        className="w-full px-4 py-3 rounded-lg border"
                        placeholder="Enter balance"
                        />
                        {errors.balance && <p className="text-red-600 text-sm">{errors.balance.message}</p>}
                        </div>
                    </div>


                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                        type="submit"
                        className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        <Save className="w-4 h-4 mr-2" />
                    </button>

                    <button
                        type="button" onClick={onFormReset}
                        className="flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
                    >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PersonForm
