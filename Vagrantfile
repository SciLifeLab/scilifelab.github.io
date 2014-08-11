# -*- mode: ruby -*-

Vagrant.configure('2') do |config|
	config.vm.box = 'precise64'
	config.vm.box_url = 'http://files.vagrantup.com/' + config.vm.box + '.box'

	# Make it so that network access from the vagrant guest is able to
  # use SSH private keys that are present on the host without copying
  # them into the VM.
	config.ssh.forward_agent = true

	# forward the dev server port
	config.vm.network :forwarded_port, guest: 8087, host: 8087

	# provision with bash script
	config.vm.provision :shell do |s|
		s.path = "provision.sh"
	end
end
