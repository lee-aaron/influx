import tensorflow as tf
from tensorflow import keras
import numpy as np
from sklearn.model_selection import train_test_split
from imutils import paths
import cv2
import os
from PIL import Image

DATASET_PATH = "./dataset/DIV2K_train_HR"

data = tf.keras.preprocessing.image_dataset_from_directory(
  DATASET_PATH,
  validation_split=0.2,
  subset="training",
  seed=123)