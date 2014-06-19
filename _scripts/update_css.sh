#!/usr/bin/env bash

remove_old_css() {
  # Remove the old compiled CSS file
  local old_css="./css/main-compiled.css"

  if [ -f $old_css ]; then
    echo "Removing old CSS: $old_css"
    rm $old_css
  fi

  return 0
}

copy_compiled_css() {
  # Copy the freshly compiled CSS file
  local new_css="./_site/css/main.css"

  if [ -f $new_css ]; then
    echo "Copying freshly compiled CSS: $new_css"
    cp $new_css ./css/main-compiled.css
  else
    echo "Couldn't find the freshly compiled CSS file"
    return 1
  fi

  return 0
}

# Move to the root of the project (optional)
if [ -n "$1" ]; then
  echo "Moving to $1"
  cd $1
fi

remove_old_css

copy_compiled_css

# Go back to where we started (if we left it in the first place)
if [ -n "$1" ]; then
  echo "Moving back"
  cd -
fi
