export const Responser = {
  success: (res, data, code = 200) => {
    res.status(code).json({
      success: true,
      data,
    });
  },

  error: (res, message, code = 400) => {
    res.status(code).json({
      success: false,
      message,
    });
  },

  enviarRespuesta: (res, code, success, message, data = null) => {
    const response = {
      success,
      message,
    };

    if (data !== null) {
      response.data = data;
    }

    return res.status(code).json(response);
  },
};
