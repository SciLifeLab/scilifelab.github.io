#!/usr/bin/env bash
echo "provisioning virtual machine"

echo "installing essentials"
apt-get -qq update
apt-get -qq -y install build-essential git ruby1.9.3 nodejs
gem install bundler

echo "installing ruby tools"
gem install github-pages sass html-proofer --no-ri --no-rdoc

apt-get -qq update

echo "finished provisioning"
