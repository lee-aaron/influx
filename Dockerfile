FROM tensorflow/tensorflow:latest-jupyter

WORKDIR /influx

RUN apt-get update && apt-get install -y libgl1-mesa-dev
RUN pip install --upgrade pip
RUN pip3 install opencv-python
RUN pip3 install scikit-learn
RUN pip3 install imutils

COPY . .

CMD ["jupyter", "notebook", "--port=8888", "--no-browser", "--ip=0.0.0.0", "--allow-root"]