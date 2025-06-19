import os
import shutil
import random

def split_images(input_directory, output_directory, train_ratio=0.8):
    train_dir = os.path.join(output_directory, 'train')
    test_dir = os.path.join(output_directory, 'test')
    os.makedirs(train_dir, exist_ok=True)
    os.makedirs(test_dir, exist_ok=True)

    # Traverse through all top-level folders inside the input directory
    for root, dirs, files in os.walk(input_directory):
        # Skip the root folder (we don't want to process the base folder)
        if root == input_directory:
            continue

        # For each subfolder, list image files
        image_files = [f for f in files if f.lower().endswith(('.jpg', '.jpeg', '.png', '.bmp', '.gif'))]

        if not image_files:
            continue

        # Shuffle the list of image files for randomness
        random.shuffle(image_files)

        # Calculate split index based on the provided ratio
        split_idx = int(len(image_files) * train_ratio)

        # Split image files into training and testing sets
        train_images = image_files[:split_idx]
        test_images = image_files[split_idx:]

        # Get the relative path of the current subfolder (relative to input_directory)
        relative_path = os.path.relpath(root, input_directory)

        # Create subfolders in train and test directories (preserving the structure)
        train_subfolder = os.path.join(train_dir, relative_path)
        test_subfolder = os.path.join(test_dir, relative_path)
        os.makedirs(train_subfolder, exist_ok=True)
        os.makedirs(test_subfolder, exist_ok=True)

        # Copy image files to the train directory
        for image in train_images:
            src_image = os.path.join(root, image)
            dst_image = os.path.join(train_subfolder, image)
            shutil.copy(src_image, dst_image)
            print(f"Copied to train: {src_image} -> {dst_image}")

        # Copy image files to the test directory
        for image in test_images:
            src_image = os.path.join(root, image)
            dst_image = os.path.join(test_subfolder, image)
            shutil.copy(src_image, dst_image)
            print(f"Copied to test: {src_image} -> {dst_image}")

# Example usage:
input_directory = r"C:\Users\abhij\Downloads\Images\Original Images"
output_directory = r"C:\Users\abhij\Downloads\Images\Splitted Images"

split_images(input_directory, output_directory, train_ratio=0.8)
